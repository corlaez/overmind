# Structuring the app

You will quickly see the need to give more structure to your application. The base structure of

`{ state, actions, effects }`

does not scale very well.

The before mentioned base structure is called **the configuration** of your application and tools are provided to create more complex configurations. But before we look at those tools, lets talk about file structure.

## Domains

As your application grows you start to separate it into different domains. A domain might be closely related to a page in your application, or maybe it is strictly related to managing some piece of data. It does not matter. You define the domains of your application and they probably change over time as well. What matters in the context of Overmind though is that each of these domains will container their own state, actions and effects. So imagine a file structure of:

```marksy
h(Example, { name: "guide/structuringtheapp/files" })
```

In this structure we are splitting up the differet components of the base structure. This is a good first step. The **index** file acts as the file that brings the state, actions and effects together. In this example the file would also be responsible for instantiating the application itself.

But if we want to split up into actual domains it would look more like this:

```marksy
h(Example, { name: "guide/structuringtheapp/domains" })
```

In this cause each domain **index** file bring its own state, actions and effects together and the **app/index** file is responsible for bringing the configuration together. Let us look at how that can be accomplished.

```marksy
h(Example, { name: "guide/structuringtheapp/namespaced" })
```

We used the **namespaced** function to put the state, actions and effects from each domain behind a key. In this case the key is the same as the name of the domain itself. This is an effective way to split up your app. 

```marksy
h(Notice, null, "Even though you split up into different domains each domain has access to the state of the whole application. This is an important feature of Overmind which allows you to scale up and explore the domains of the application without having to worry about isolation")
```