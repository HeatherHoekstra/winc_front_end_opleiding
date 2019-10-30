import React from "react";
import { withRouter } from "react-router-dom";

import "./Post.css";

const post = props => (
  <article className="Post" onClick={props.clicked}>
    <h1>{props.title}</h1>
    <div className="Info">
      <div className="Author">{props.author}</div>
    </div>
  </article>
);

export default withRouter(post);
//withRouter zorgt ervoor dat post dezelfde props krijgt
//van router als Posts (waar die in zit)
//Hier is het niet persé nodig.
