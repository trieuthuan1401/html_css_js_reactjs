
import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu';
import Slider from './Slider';
import Courses from './Courses';
import OneCourse from './OneCourse'
import Rate from './Rate';
import Benefit from './Benefit';
import Feeling from './Feeling';
import CourseFree from './CourseFree';
import Teacher from './Teacher';
import Footer from './Footer';
import Login from './Login';
import DetailsCourse from './DetailsCourse';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import UserList from './user/list.user'
import CourseList from './course/list.course'
import UserCourseList from './userCourse/list.userCourse'
import CourseContentList from './courseContent/list.courseContent'
import CodeFreeList from './CodeFree/list.codeFree'
import TeacherList from './teacher/list.teacher'
import DetailsTeacher from './DetailsTeacher';
import PageNotFound from './PageNotFound';
import DetailsCourseFree from './DetailsCourseFree';
import Custommer from './Custommer';
import ChangePassWord from './ChangePassWord';
import CoursePHP from './CoursePHP';

// import ChangePassWord from './ChangePassWord';


export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/details" component={DetailsCourse} />
          <Route exact path='/login' component={Login} />
          <Route exact path="/admin" component={UserList} />
          <Route exact path="/user" component={UserList} />
          <Route exact path="/course" component={CourseList} />
          <Route exact path="/userCourse" component={UserCourseList} />
          <Route exact path="/courseContent" component={CourseContentList} />
          <Route exact path="/teacher" component={TeacherList} />
          <Route exact path="/codeFree" component={CodeFreeList} />
          <Route exact path="/detailsTeacher" component={DetailsTeacher} />
          <Route exact path="/detailsCourseFree" component={DetailsCourseFree} />
          <Route exact path="/custommer" component={Custommer} />
          <Route exact path="/changePassWord" component={ChangePassWord} />
          <Route exact path="/coursePHP" component={CoursePHP} />

          <Route component={PageNotFound} />
        </Switch>
      </div>
    )
  }
}