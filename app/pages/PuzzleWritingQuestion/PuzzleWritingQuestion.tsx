import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const PuzzleWritingQuestion = (): JSX.Element => {
  const [text, setText] = useState("");
  const onChangeText = (payload) => setText(payload);
  const postContent= () => {
    if(text === ""){
      return
    }
    // content save;
    setText("");
  }

  return (
    <View style={styles.container}>

      <View style={styles.topheader}>
        <Image style={styles.profileImage} source={require('../../assets/images/puzzle_logo.png')} />
        <View style={styles.headerText}>
          <Text style={styles.topText}>홍진경님, 할부지에게 </Text>
          <Text style={styles.topTextBold}>어떤 질문을 드려 볼까요? </Text>
        </View>
      </View>

      <View style={{flex:3}}>
        <TextInput
        multiline
        style={styles.input}
        placeholder={"도움질문적기... \n도움질문은 더 풍성한 작성을 위한 보조 역할로 사용되며\n최종 컨텐츠에는 반영되지 않습니다."}
        returnKeyType="done"
        onSubmitEditing={postContent}
        value={text}
        onChangeText={onChangeText}
        />
      </View>

      <View style={{flex:1}}>
        <TouchableOpacity style={styles.questionBtn}>
          <Text style={styles.btnText}> ❔ 질문 추천 받기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f2',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },

  topheader: {
    flexDirection: "row",
    marginVertical: 20,
  },

  headerText:{
    flexDirection: "column",
    marginLeft: 10,
  },

  profileImage: {
    borderRadius: 50,
  },

  topText: {
    fontSize: 20,
  },

  topTextBold:{
    fontSize: 20,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "white",
    height: "100%",
    paddingVertical: 30,
    paddingHorizontal: 15,
    borderRadius: 7,

    alignItems: 'flex-start',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  questionBtn: {
    backgroundColor: "#454958",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    height: 50,
    borderRadius: 7,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  btnText:{
    color: "white",
    fontSize: 15,
  }

});

export default PuzzleWritingQuestion;
