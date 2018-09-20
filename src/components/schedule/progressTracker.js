import React, {Component} from 'react';

class ProgressTracker extends Component {

    caluculateProgress = () => {
        return (this.props.amountEnrolled / this.props.amountPossible) * 100;
    }

    render() {
        return (
            <div className='progress-tracker'>
                <label className='progress-tracker__lable'>ProgressTracker</label>
                <div className='progress-tracker__percentage'>
                    {this.caluculateProgress()}%
                </div>
            </div>
        )
    }
}

export default ProgressTracker;