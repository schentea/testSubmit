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

export async function apiGetNoticeDetail() {
  try {
    fetch(`${BASE_URL}/notice/${id}`);
  } catch (error) {
    console.log(error);
  }
}
