import React, { useState, useEffect } from 'react'

import Header from '../../components/signup/header'
import Body from '../../components/signup/body'
import Footer from '../../components/signup/footer'
import Container from '../../components/shared/container'

function Signup() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const users = localStorage.getItem('users')

    if (users) {
      setUsers(JSON.parse(users))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  const handleAddUser = (user) => {
    setUsers([...users, user])
  }

  return (
    <Container maxWidth="720" centered>
      <Header title="회원가입 페이지" />
      <Body onAddUser={handleAddUser} />
      <Footer users={users} />
    </Container>
  )
}

export default Signup
