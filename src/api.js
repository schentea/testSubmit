export async function apiPostNoticeWrite(formData) {
  try {
    // console.log(formData);
    return await fetch(
      "https://confidential-kathrine-schentea.koyeb.app/notice/write",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
