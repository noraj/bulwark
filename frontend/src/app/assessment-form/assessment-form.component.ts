import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { AppService } from '../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Assessment } from './Assessment';

@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.component.html',
  styleUrls: ['./assessment-form.component.sass']
})
export class AssessmentFormComponent implements OnInit, OnChanges {
  public assessmentModel: Assessment;
  public assessmentForm: FormGroup;
  public assetId: number;
  public assessmentId: number;
  public orgId: number;
  constructor(
    public appService: AppService,
    private fb: FormBuilder,
    public route: Router,
    public activatedRoute: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ assessment }) => {
      if (assessment) {
        assessment.startDate = this.transformDate(assessment.startDate);
        assessment.endDate = this.transformDate(assessment.endDate);
        this.assessmentForm.patchValue(assessment);
      }
    });
    this.activatedRoute.params.subscribe((params) => {
      this.assetId = +params['assetId'];
      this.assessmentId = +params['assessmentId'];
      this.orgId = +params['orgId'];
    });
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  transformDate(date) {
    return new Date(date);
  }

  rebuildForm() {
    this.assessmentForm.reset({
      name: this.assessmentModel.name,
      executiveSummary: this.assessmentModel.executiveSummary,
      jiraId: this.assessmentModel.jiraId,
      testUrl: this.assessmentModel.testUrl,
      prodUrl: this.assessmentModel.prodUrl,
      scope: this.assessmentModel.scope,
      tag: this.assessmentModel.tag,
      startDate: this.assessmentModel.startDate,
      endDate: this.assessmentModel.endDate
    });
  }

  createForm() {
    this.assessmentForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      executiveSummary: ['', [Validators.maxLength(1500)]],
      jiraId: ['', [Validators.maxLength(15)]],
      testUrl: ['', [Validators.required, Validators.maxLength(250)]],
      prodUrl: ['', [Validators.required, Validators.maxLength(250)]],
      scope: ['', [Validators.required, Validators.maxLength(20)]],
      tag: ['', [Validators.maxLength(250)]],
      startDate: ['', [Validators.required, Validators.maxLength(25)]],
      endDate: ['', [Validators.required, Validators.maxLength(25)]]
    });
  }

  onSubmit(assessment: FormGroup) {
    this.assessmentModel = assessment.value;
    this.assessmentModel.asset = this.assetId;
    this.createOrUpdateAssessment(this.assessmentModel);
  }

  createOrUpdateAssessment(assessment: Assessment) {
    if (this.assessmentId) {
      this.appService.updateAssessment(assessment, this.assessmentId, this.assetId).subscribe((success) => {
        this.navigateToAssessments();
      });
    } else {
      this.appService.createAssessment(this.assessmentModel).subscribe((success) => {
        this.navigateToAssessments();
      });
    }
  }

  navigateToAssessments() {
    this.route.navigate([`organization/${this.orgId}/asset/${this.assetId}`]);
  }
}