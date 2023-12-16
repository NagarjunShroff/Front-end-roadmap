# Concurrent React

- What is Concurrent React?

Its new behind-the-scenes mechanism that enables React to prepare multiple versions of your UI at the same time.

A key property of Concurrent React is that rendering is interruptible. This is introduced in React v18.0.0, before this version updates are rendered in a single, uninterrupted, synchronous transaction. With synchronous rendering, once the updates starts rendering, nothing can interrupt until the user see the results on the screen.

In a concurrent render, this was not always the case. React may start rendering an update, stops it in the middle ,then continue later. it may even abandon an in-progress render altogether. React guarantees that the UI will appear consistent even if a render is interrupted.To do this, it waits to perform DOM mutations until the end, once the entire tree has been evalutated. With this capability, React can prepare new screens in the background without blocking the main thread. This means UI can respond immediately to the user inputs even if it is in the middle of large rendering task,creating a fluid user experience.

Another example is reusable state. Concurrent React can remove the sections of the UI from the screen, then add them back later while reusing the previous state. For example, when the user tabs away from the screen and back, React should be able to restore the previous screen in the same state as it was in before.