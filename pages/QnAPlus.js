import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import styled from 'styled-components';
import Header from '../components/Header';
import Nav from '../components/Nav';
import {connect, useDispatch, useSelector} from "react-redux";
import {actionCreators} from "../reducers/goods";
import shortid from 'shortid'
// import {addToQuestion} from "../reducers/goods";


// css part
const Container = styled.SafeAreaView`
  flex: 1;
  border: 2px solid blue;
`;

const Contents = styled.ScrollView`
  flex: 1;
  border: 2px solid blue;
`;

// flex-direction:row;
const QnAView = styled.View`
  border: 3px solid red;
  flex-direction: row;
  justify-content: space-around;
`;

const QnANameText = styled.TextInput`
  width: 100px;
  border: 2px solid yellow;
`;

const QnAButton = styled.Button`
  width: 100px;
  border: 2px solid yellow;
`;

const QnAContentTextInput = styled.TextInput`
  flex: 1;
  border: 2px solid green;
  height: 200px;
`;


// function part
const QnAPlus = (props) => {

  const {addToQuestion} = props;   // In mapDispatchToProps
  const {qna} = props;

  const [title, onChangeTitle] = useState('');
  const [content, onChangeContent] = useState('');
  // const dispatch = useDispatch();
  // const {addToQuestion} = useSelector(state => state.goos);

  console.log('This is a dispatch : ', addToQuestion);
  useEffect(() => {
    // TODO: take the bucket list to axios
  }, []);

  const onPressQuestion = useCallback(() => {

    const text = {
      title,
      content,
      id:shortid.generate(),
    }

    // console.log('name and content : ', name, content)
    // console.log('text : ', text)
    console.log('text : ', text);

    addToQuestion(text); // This logic goes to saga, but below the 'dispatch' does not go to saga
                        // TODO : 1. text  or  2. (name, content)
    // dispatch( addToQuestion(text) );  //TODO : 1. text  or  2. (name, content)
    props.navigation.goBack()
  }, [title, content]);

  return (
    <Container>

      <Header props={props}/>

      <Contents>

        <Text>
          {
            `질문을 등록해 주세요. 질문은 200자로 제한됩니다`
          }
        </Text>

        <QnAView>
          <QnANameText maxLength={5} value={title} onChangeText={(title) => onChangeTitle(title)}/>
          <QnAButton title={'등록하기'} onPress={onPressQuestion} />
        </QnAView>

        <QnAContentTextInput
          maxLength={200}
          multiline={true}
          onChangeText={(text) => onChangeContent(text)}
          value={content}
        />
        {/*{qna}*/}
      </Contents>

      <Nav props={props} />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {state};
}

const mapDispatchToProps = (dispatch) => {
  console.dir('qna plus 에서 dispatch : ', dispatch)
  return {
    addToQuestion: (text) => dispatch(actionCreators.addToQuestion(text)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QnAPlus);
// export default connect(mapStateToProps)(QnAPlus);
