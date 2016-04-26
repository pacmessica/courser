import React from 'react';
import jQuery from 'jquery';

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [{
          name: 'React',
          description: 'Its a course'
        },
        {
          name: 'Javascript',
        description: 'Learn the basics'
        }]
    };
  }

  componentDidMount() {
    jQuery.get("http://localhost:3000/courses.json", (function(data){
      this.setState({
        courses: data.courses,
      });
    }).bind(this));
  }

  render() {
    let courses = this.state.courses.map(function(course) {
      return <li key={course.id}><h1>{course.name}</h1><p>{course.description}</p></li>;
    });

    return (
        <ul>
          {courses}
        </ul>
    )
  }

}

export default Courses;
