export default async function graphqlRequest(query) {
  const url = "https://admin.7wondersperu.com/graphql";
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(query),
    next: { revalidate: 60 },
  });
  const resJson = await res.json();
  return resJson;
}
