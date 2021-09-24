import React, { useEffect, useState } from "react";
import styles from "./Posts.scss";
import { get } from "../../api/Api";
import { Link, useParams } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const Posts = () => {
  const { url, path } = useRouteMatch();
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    console.log("loadPosts");
    await get("/posts", {}, (data) => {
      setPosts(data);
    });
  };

  return (
    <Router>
      <Switch>
        <Route exact path={`${path}`}>
          <div className="Posts">
            {posts.map((it1, x1) => {
              return (
                <div className="Posts-item">
                  <div className="id">{it1?.id}</div>
                  <div className="title">
                    <Link to={`${path}/${it1?.id}`}> {it1?.title}</Link>
                  </div>
                  <div className="body">{it1?.body}</div>
                </div>
              );
            })}
          </div>
        </Route>
        <Route path={`${path}/:id`}>
          <QueryClientProvider client={new QueryClient()}>
            <Post />
          </QueryClientProvider>
        </Route>
      </Switch>
    </Router>
  );
};

export default Posts;

function Post() {
  const { id = null } = useParams();
  const history = useHistory();
  const [post, setPost] = useState(null);
  let myKey = ["myKey", 5];

  const { isLoading, error, data, isFetching } = useQuery(myKey, () => {
    return get(`/posts/${id}`);
  });

  if (error)
    return (
      <div>
        <div>Oops! Some error.</div>
        <div>{error?.message}</div>
      </div>
    );
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div>ID: {id}</div>
      <div>
        {/* <pre>{JSON.stringify(data)}</pre> */}
        {Object.keys(data).map((it1, idx1) => {
          return (
            <div>
              <span style={{ fontSize: "2em", fontWeight: "900" }}>{it1}:</span>{" "}
              {data[it1]}
            </div>
          );
        })}
      </div>
      <div>
        <button
          onClick={(ev) => {
            history.goBack();
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}
