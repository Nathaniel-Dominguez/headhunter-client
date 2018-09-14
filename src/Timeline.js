import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class TimeLine extends Component {
  render() {
    return(
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={this.props.date}
        >
          <h3 className="vertical-timeline-element-title">{this.props.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{this.props.content}</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
      );
  }
}