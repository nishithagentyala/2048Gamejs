import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'

const GameList = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  return (
    <Row>
      <Col md={9} className='m-4'>
        <h2>My Games</h2>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>SCORE</th>
                <th>BEST SCORE</th>
              </tr>
            </thead>
            <tbody>
              <tr key={userInfo._id}>
                <td>{userInfo._id}</td>
              </tr>
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  )
}

export default GameList
