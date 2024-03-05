const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function apiPostNoticeWrite(formData) {
  try {
    // console.log(formData);
    return await fetch(`${BASE_URL}/notice/write`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
export async function apiGetNoticeList() {
  try {
    return await fetch(`${BASE_URL}/notice`).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
  return;
}

export async function apiGetNoticeDetail(props) {
  const id = props.queryKey[1];
  try {
    return await fetch(`${BASE_URL}/notice/${id}`).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

export async function apiPostNoticeUpdate(props) {
  const { formData, id } = props;
  try {
    // console.log(formData);
    return await fetch(`${BASE_URL}/notice/${id}/edit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

// export async function apiTest() {
//   try {
//     return await fetch(`${BASE_URL}/test1`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function apiTest2() {
//   try {
//     return await fetch(`${BASE_URL}/people`).then((res) => res.json());
//   } catch (error) {
//     console.log(error);
//   }
// }
