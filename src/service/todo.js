const BASE_URL = 'http://localhost:8000/todo'

/**
 * Todos  목록을 가져옴
 *
 *
 */

export async function fetchTodos() {
  const response = await fetch(BASE_URL) //기본메소드는 get
  //비동기라서 순차를 보장해줘야함(await)
  //await을 통해 fetch가 완료되기 전까진는  아래코드 수행안함

  if (!response.ok) {
    return [] //실패하면 빈배열
  }
  return response.json() //성공하면 Todos 목록 가져옴
}

/**
 * 새로운 Todo를 저장
 *
 *
 */

export async function postTodo(payload) {
  //서버와 주고받는 것을 payload로 칭함
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  return response.ok
}

/**
 * 상태 update
 *
 *
 */

export async function updateTodo(payload) {
  // {id:0, title:'수정한 투두'}
  const response = await fetch(`${BASE_URL}/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  return response.ok
}

//삭제
export async function deleteTodo(id) {
  //payload가 없고 특정 todo번째 것을 삭제하고자 id를 줌
  const response = await fetch(`${BASE_URL}/${payload.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    //삭제는 서버에 보낼 값 없음
  })
  return response.ok //통신 성공 유무만 있으면 됨
}
