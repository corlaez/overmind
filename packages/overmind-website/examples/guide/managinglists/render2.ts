const javascript = {
  components: [
    {
      fileName: 'components/Post.jsx',
      target: 'jsx',
      code: `
import { h } from 'overmind-components'

const Post = ({ post }) => (
  <li>{post.title}</li>
)

export default Post
    `,
    },
    {
      fileName: 'components/Posts.jsx',
      target: 'jsx',
      code: `
import { h, useOvermind } from 'overmind-components'
import Post from './Post'

const Posts = () => {
  const { state } = useOvermind()

  return (
    <ul>
      {state.postsList.map(post => 
        <Post key={post.id} post={post} />
      )}
    </ul>
  )
}

export default Posts
    `,
    },
  ],
  react: [
    {
      fileName: 'components/Post.jsx',
      target: 'jsx',
      code: `
import React from 'react'
import { connect } from '../app'

const Post = ({ post }) => (
  <li>{post.title}</li>
)

export default connect(Post)
    `,
    },
    {
      fileName: 'components/Posts.jsx',
      target: 'jsx',
      code: `
import React from 'react'
import { connect } from '../app'
import Post from './Post'

const Posts = ({ overmind }) => (
  <ul>
    {overmind.state.postsList.map(post => 
      <Post key={post.id} post={post} />
    )}
  </ul>
)

export default connect(Posts)
    `,
    },
  ],
  vue: [
    {
      fileName: 'components/Post.vue (template)',
      target: 'markup',
      code: `
<li>{{ post.title }}</li>
    `,
    },
    {
      fileName: 'components/Post.vue (script)',
      code: `
import { connect } from '../app'

export default connect({
  props: ['post']
})
  `,
    },
    {
      fileName: 'components/Posts.vue (template)',
      target: 'markup',
      code: `
<ul>
  <li is="Post" v-for="post in overmind.state.postsList" v-bind:post="post" :key="post.id" />
</ul>
    `,
    },
    {
      fileName: 'components/Posts.vue (script)',
      code: `
import { connect } from '../app'
import Post from './Post'

export default connect({
  components: {
    Post,
  },
})
  `,
    },
  ],
}

const typescript = {
  components: [
    {
      fileName: 'components/Post.tsx',
      code: `
import { h, Component } from 'overmind-components'
import { Post as TPost } from '../app/state'

type Props = {
  post: TPost
}

const Post: Component<Props> = ({ post }) => (
  <li>{post.title}</li>
)

export default Post
    `,
    },
    {
      fileName: 'components/Posts.tsx',
      code: `
import { h, Component, useOvermind } from 'overmind-components'
import Post from './Post'

const Posts: Component = () => {
  const { state } = useOvermind()

  return (
    <ul>
      {state.postsList.map(post => 
        <Item key={post.id} post={post} />
      )}
    </ul>
  )
}

export default Posts
    `,
    },
  ],
  react: [
    {
      fileName: 'components/Post.tsx',
      code: `
import * as React from 'react'
import { connect, Connect } from '../app'
import { Post as TPost } from '../app/state'

type Props = {
  post: TPost
} & Connect

const Post: React.SFC<Props> = ({ post }) => (
  <li>{post.title}</li>
)

export default connect(Post)
    `,
    },
    {
      fileName: 'components/Posts.tsx',
      code: `
import * as React from 'react'
import { connect, Connect } from '../app'
import Post from './Post'

const Posts: React.SFC<Connect> = ({ overmind }) => (
  <ul>
    {overmind.state.postsList.map(post => 
      <Item key={post.id} post={post} />
    )}
  </ul>
)

export default connect(Posts)
    `,
    },
  ],
  vue: javascript.vue,
  angular: [
    {
      fileName: 'components/post.component.ts',
      code: `
import { Component,Input } from '@angular/core';
import { connect } from '../app'
import { Item } from '../app/state'

@Component({
  selector: 'app-post',
  template: \`
  <li>
    {{post.title}}
  </li>
  \`
})
@connect()
export class List {
  @Input() post: Post;
}
    `,
    },
    {
      fileName: 'components/posts.component.ts',
      code: `
import { Component } from '@angular/core';
import { connect } from '../app'

@Component({
  selector: 'app-posts',
  template: \`
  <ul>
    <app-post
      *ngFor="let post of overmind.state.postsList;trackby: trackById"
      [post]="post"
    ></app-post>
  </ul>
  \`
})
@connect()
export class List {
  trackById(index, post) {
    return post.id
  }
}
    `,
    },
  ],
}

export default (ts, view) => (ts ? typescript[view] : javascript[view])
