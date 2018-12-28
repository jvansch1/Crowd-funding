import React from 'react';

class CreatorsIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCreators()
  }

  render() {
    const { creators } = this.props;
    debugger
    if (creators instanceof Array) {
      return (
        <div>
          <h2>Creators Index</h2>

          <ul>
            {creators.map(creator => {
              return <li>{creator.name}</li>
            })}
          </ul>
        </div>
      )
    }
    return (<div></div>)
  }
}

export default CreatorsIndex;
