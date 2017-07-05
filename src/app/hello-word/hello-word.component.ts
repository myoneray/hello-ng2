import { Component, OnInit } from '@angular/core';  //导入依赖

//声明组件
@Component({
  selector: 'app-hello-word',//组件使用的DOM元素
  templateUrl: './hello-word.component.html',  //添加模板
  styleUrls: ['./hello-word.component.css']  //添加样式
})

export class HelloWordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
