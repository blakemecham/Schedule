import React, {Component} from 'react';
import Icon from '../icon';

class LibraryCourse extends Component {
    render() {
        return (
            <div className='library-course'>
                <lable className='library-course__title'>Problem Solving</lable>
                {Icon('fas fa-check', 'library-course__icon')}
                {Icon('fas fa-plus-circle', 'library-course__action')}
                <div className='library-course__description'>
                    <lable>Course Description</lable>
                    <p>This is awesome!</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;