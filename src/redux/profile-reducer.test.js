const { default: profileReducer, addPostActionCreator, deletePost } = require("./profile-reducer");
let state = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', likeCount: '23', dislikeCount: '20', commentText: '', },
        { id: 2, message: 'Hi, how are you?', likeCount: '23', dislikeCount: '20', commentText: '', },
        { id: 3, message: 'Hi, how are you?', likeCount: '23', dislikeCount: '20', commentText: '', },
        { id: 4, message: 'it', likeCount: '23', dislikeCount: '20', commentText: '', },
    ],
};
test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("it");
   
    // 2. action
    let newState = profileReducer(state,action)

    // 3. expectation
    expect(newState.postsData.length).toBe(5);
  });

  test('text should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("it");
   
    // 2. action
    let newState = profileReducer(state,action)

    // 3. expectation
    expect(newState.postsData[4].message).toBe('it');
  });
 
  test('after deleting length should be decrement', () => {
    // 1. test data
    let action = deletePost(1);
   
    // 2. action
    let newState = profileReducer(state,action)

    // 3. expectation
    expect(newState.postsData.length).toBe(3);
  });
  test(`text after deleting length shouldn't be decrement if id is incorrect `, () => {
    // 1. test data
    let action = deletePost(1000);
   
    // 2. action
    let newState = profileReducer(state,action)

    // 3. expectation
    expect(newState.postsData.length).toBe(4);
  });
  