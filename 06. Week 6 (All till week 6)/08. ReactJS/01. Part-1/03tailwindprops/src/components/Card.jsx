import React from 'react'

function Card({username, btnText="visit me"}) {
    console.log(username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md ">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText } →
    </button>
  </div>
</div>
  )
}

export default Card

//Props are used to pass data from parent to child. Eg: Card.jsx is a child component & App.jsx is a parent component. Props are parameters defined in child component whose arguments are passed from parent component. Props can anything like name. Eg: if we call Card() with some name then wherever in the child component we see a name prop then that will be replaced by the name passed by us. So using this prop we can pass diff. multiple names to create multiple cards.

//If we use console.log() on props, we will get an object & [[prototype]] & whenever we see double square brackets, then it is called scope or hidden scope which has some hidden scope values which are not directly accessible to us.
 //We can pass multiple props to a component. Eg: <Card username="John" btnText="Visit me" />. But they must be declared in the child component while declaration of the function. Eg: function Card({username, btnText}) {}.

//We can also pass default values to props. Eg: function Card({username, btnText="visit me"}) {}. So if we don't pass btnText, then it will take the default value as visit me.

//But keep in mind that props is an object. While passing args, make sure to wrap them in {} if they are variables.

//Now there are 2 ways to use syntax of props
/*
01. Destructuring props: In this we directly destructure the props in the function declaration. Eg: function Card({username, btnText}) {}. now we directly use username & btnText & change their values while passing args. eg: <Card username="John" btnText="Visit me" />.
02. Using props object: In this we use props object to access the props. Eg: function Card(props) {}. now we use props.username & props.btnText to access the values of username & btnText. eg: <Card username="John" btnText="Visit me" />.

Misc: If we want to use array in props. First we declare it in the parent component outside the function, then we have to wrap them in {} & use spread operator. Eg: <Card {...user} />. Sometimes it works without spread operator also. But wrapping it in  {} is due to the way how react stored data in key value pairs.

we can use any data type in props. Eg: we can pass an array in props. Eg: <Card user={["John", "Jane", "Jim"]} />.   //Exception for array. because of react's default behaviour.

Use of destructuring props is better than using props object.
After declaring parameters, replace the name in the tailwind component with the name of the prop ie username, btnText but with {} as now they are variables . So {username} & {btnText}.


If a variable is defined in parent component. eg: A="John" then we can use it in the calling component as  <Card username={A} />.

Nothing willl happen if we pass a prop in Parent component like <card background="red" /> but background in not defined in the child component ie Card.jsx. This is called handling of props, which needs to be done before calling them.

Now, sometimes working in teams if the fellow team member forget to pass the props value while creating new task then that value won't be displayed. So to handle this, we can use default props. Eg: function Card({username, btnText="visit me"}) {}. So if we don't pass btnText, then it will take the default value as visit me. It is done during prop declaration. However this can also done at the place in tailwind component where we are replacing the name with our prop. eg: We replaced name(delba) with {username} now if we write {username || "Arsh"} then it will take the default value as Arsh if team member forget to pass the username's value but avoid it as it has low readability but same performance.

 //Now we can also pass props to a component. Eg: <Card {...user} />. So here we are passing all the properties of the user object to the Card component.  //I don't know its true or not as it was cursor's recommendation.




*/ 
