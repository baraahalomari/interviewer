import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import Result from './result';
import Home from './home';


const Quiz = ({ route, navigation }) => {
  const { selectedId } = route.params;

  const [showQues, setShowQues] = useState(false)
  const [graid, setgraid] = useState(0)
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const getQuiz = async () => {
    const url = `https://opentdb.com/api.php?amount=10&category=${selectedId}&difficulty=medium&type=multiple`;
    const res = await fetch(url);
    const data = await res.json();

    setQuestions(data.results);

  };


  useEffect(() => {
    getQuiz();
  }, []);


  return (
    <View style={styles.container}>


      {questions && (
        <View style={styles.parent}>
          <View style={styles.top}>


            <Text style={styles.question}>Q{ques + 1}. {questions[ques].question}</Text>
          </View>
          <View style={styles.options}>

            <TouchableOpacity
              onPress={() => setgraid(graid + 1)}
              style={styles.optionButtom}>
              <Text style={styles.option}> {questions[ques].correct_answer}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButtom}>
              <Text style={styles.option}>{questions[ques].incorrect_answers[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButtom}>
              <Text style={styles.option}>{questions[ques].incorrect_answers[2]}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButtom}>
              <Text style={styles.option}>{questions[ques].incorrect_answers[1]}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity
              onPress={() => {
                if (ques > 0) {
                  setQues(ques - 1)
                } else {
                  { navigation.navigate('Home') }

                }
              }}
              style={styles.button}>
              <Text style={styles.buttonText}>Prev</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                if (ques < 9) {
                  setQues(ques + 1)
                } else {
                  setShowQues(true)

                }
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {showQues && (
        <View style={styles.parent}>
          {navigation.navigate('Result', { graid: graid })}

        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#1A759F',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  optionButtom: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#34A0A4',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: '100%',
  },
});
