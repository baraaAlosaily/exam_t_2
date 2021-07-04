import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export class ApiCrudData extends Component {
  render() {
    return (
      this.props.apiCrudData.map((data, idx) => {
        return (
          <div key={idx}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={data.img} />
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                  {data.psiPowers}
                </Card.Text>
                <Button onClick={e => this.props.deleteItem(data.slug)} variant="primary">delete</Button>
                <Button onClick={e => this.props.showupdatedForm(data.slug, data.psiPowers)} variant="primary">update describtion</Button>
              </Card.Body>
            </Card>
          </div>
        )
      }))
  }
}

export default ApiCrudData
