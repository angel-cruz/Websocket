import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['Northeast', 'Midwest', 'South', 'West'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [56111079,68308744,124753948,77993663], label: 'Region populatiin 2018'},
    {data: [56072676,68156035,77319986,123598424], label: 'Region population 2017'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
