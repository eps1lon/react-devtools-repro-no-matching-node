# react-devtools 'cannot remove node "5" ...' repro

1. Clone repro
1. yarn
1. yarn start
1. Open app page
1. open devtools
1. Uncomment the `useEffect` block i.e. add an effect
1. inspect `Component` element
1. comment `useEffect` block i.e. remove the effect
