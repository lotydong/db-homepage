import React from "react"
import { withFormsy, propTypes } from "formsy-react"

class Textarea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blurred: false,
    }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleBlur() {
    this.setState({
      blurred: true,
    })
  }

  handleFocus() {
    this.setState({
      blurred: false,
    })
  }

  render() {
    const errorMessage = this.state.blurred ? this.props.getErrorMessage() : ``

    return (
      <div className={this.props.className}>
        <label htmlFor={this.props.name}>{this.props.title}
          <textarea
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={e => this.props.setValue(e.target.value)}
            name={this.props.name}
            type={this.props.type || `text`}
            value={this.props.getValue() || ``}
            rows={this.props.rows}
            cols={this.props.cols}
          />
        </label>
        <span className="validation-error">{errorMessage}</span>
      </div>
    )
  }
}

Textarea.propTypes = {
  ...propTypes,
}

export default withFormsy(Textarea)