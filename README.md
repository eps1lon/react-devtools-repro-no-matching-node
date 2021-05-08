

# react-devtools 'cannot remove node "5" ...' repro

1. Clone repro
1. yarn
1. yarn start
1. Open app page
1. open devtools
1. Uncomment the `useEffect` block i.e. add an effect
1. inspect `Component` element
1. comment `useEffect` block i.e. remove the effect
1. Repeat comment/uncomment to see that children grow indefinitely

https://user-images.githubusercontent.com/12292047/117544927-e6f39880-b023-11eb-82b2-32812a172946.mp4


