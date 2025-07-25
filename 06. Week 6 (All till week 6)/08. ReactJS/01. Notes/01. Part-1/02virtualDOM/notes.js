//Virtual DOM, Fiber & Reconciliation Notes:

/*
Virtual DOM:

It is not used in React nowadays but it used to be used earlier. But it is asked in interviews.
It is a tree of React elements.
 

Recall when we studied createRoot used to create a connection b/w react and the DOM or html.
It creates a DOM like structure in the memory. Unlike browser's DOM, which reloads the entire page whenever any changes are made. createRoot's DOM compares his own DOM with browser's DOM and updates the changes only, not reloads the entire page from start. This is virtual DOM.
On any change, browser remmoves the prev. DOM and creates a new one or repaints the entire page.

In virtual DOM, we can track all elements in tree like structure & replace the values changed with the new ones.

Now the problem was that any updates made in element will instantly reflect in the browser's DOM. So some elements which were network call dependent, had new update in ongoing time in which they were updating the last change. Hence this frequent updating of network dependent elements were causing problem.
So the idea was to not update UI elements instantly but to update them with proper optimizations.


React Fiber: (Only read Acidlite's github article, don't use chatgpt)
It is an algorithm which is used to update the virtual DOM. It works there behind the scenes.
To avoid the problem of frequent updating of network dependent elements, which caused problems in animations, layout & gestures, React Fiber was introduced.
It's main feature is incremental rendering. Which means that it can update the UI in chunks.
It has ability to pause, abort or reuse the work as new updates come in. It can assign priority to diff. types of updates.
Now fiber is implemented completely in React. However it's code/algo is still diff. to understand.


Reconciliation: It is a recursive process of comparing the virtual DOM with the browser's DOM and updating the changes only.
It also decides which element to update & which not to update.

It is the algo behind virtual DOM.

Reconcillation is a diff. algorithm which is used to compare 2 trees ie the virtual DOM with the browser's DOM and updating the changes only. Git also follows this algorithm.

Virtual DOM is created by createRoot method. 

update: A change in the data used to render a react app. Usually the result of a 'set State' eventually results in are-render.


We don't have to care about updating the variable's value on all places, it's react's job to do that.

Fiber is an upgraded rewrite of reconciliation algo.

In Fiber, we use keys to display elements as they have high performance



read Acidlite's github article, don't use chatgpt.
We can make priority queue for updates.






Key features of Fiber:

1. Incremental rendering: It can update the UI in chunks.
2. Pause, abort or reuse the work as new updates come in.
3. Ability to assign priority to diff. types of updates.
4. Ability to pause, abort or reuse the work as new updates come in.
5. Ability to assign priority to diff. types of updates.

We abort an update if it's not needed. generally happends when we are about to update with update 1 then update 2 comes in. So we abort update 1 and use update 2.






 




*/