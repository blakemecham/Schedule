import React, {Component} from 'react';

class LibraryCourse extends Component {
    render() {
        return (
            <div className='library-course'>
                <lable className='library-course__title'>Problem Solving</lable>
                <div className='library-course__description'>
                    <lable>Course Description</lable>
                    <p>This is awesome!</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;