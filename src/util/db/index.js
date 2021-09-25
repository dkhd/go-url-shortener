import faunadb from "faunadb";

const client = new faunadb.Client({
  secret: process.env.REACT_APP_FAUNADB_KEY,
  domain: "db.fauna.com",
  port: 443,
  scheme: "https",
});

const q = faunadb.query;

const getUserByEmail = async (email) => {
  return await client
    .query(q.Paginate(q.Match(q.Index("users_by_email"), email)))
    .then((response) => {
      return response;
    })
    .catch((error) => console.error("Error: ", error.message));
};

const createUser = async (data) => {
  return await client
    .query(
      q.Create(q.Collection("users"), {
        data: data,
      })
    )
    .then((response) => {
      return response;
    })
    .catch((error) => console.error("Error: ", error.message));
};

const isShortURLExist = async (short_url) => {
  return await client
    .query(q.Paginate(q.Match(q.Index("short_url_by_short_url"), short_url)))
    .then((response) => {
      return response.data.length > 0;
    })
    .catch((error) => console.error("Error: ", error.message));
};

const createShortUrl = async (data) => {
  return await client
    .query(
      q.Create(q.Collection("short_url"), {
        data: data,
      })
    )
    .then((response) => {
      return response;
    })
    .catch((error) => console.error("Error: ", error.message));
};

const getShortUrl = async (short_url) => {
  return await client
    .query(q.Paginate(q.Match(q.Index("short_url_by_short_url"), short_url)))
    .then(async (response) => {
      if (response.data.length > 0) {
        const id = response.data[0].value.id;
        return await client
          .query(q.Get(q.Ref(q.Collection("short_url"), id)))
          .then((res) => {
            return res;
          });
      } else return response;
    })
    .catch((error) => console.error("Error: ", error.message));
};

export {
  client,
  q,
  getUserByEmail,
  createUser,
  isShortURLExist,
  createShortUrl,
  getShortUrl,
};
