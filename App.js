import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const FutsalScoreApp = () => {
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null); // Store the winner's name

  // Function to handle score increment
  const handleAddScore = (team) => {
    if (gameOver) return; // Prevent adding score after the game is over

    if (team === 'A') {
      const newScore = scoreTeamA + 1;
      setScoreTeamA(newScore);
      if (newScore === 10) {
        setGameOver(true); // End the game
        setWinner('JUVENTUS MENANG'); // Set the winner
        Alert.alert('Selamat!', 'JUVENTUS menang!');
      }
    } else {
      const newScore = scoreTeamB + 1;
      setScoreTeamB(newScore);
      if (newScore === 10) {
        setGameOver(true); // End the game
        setWinner('REAL BETIS MENANG'); // Set the winner
        Alert.alert('Selamat!', 'REAL BETIS menang!');
      }
    }
  };

  // Function to handle score decrement
  const handleSubtractScore = (team) => {
    if (gameOver) return; // Prevent subtracting score after the game is over

    if (team === 'A' && scoreTeamA > 0) {
      setScoreTeamA(scoreTeamA - 1);
    } else if (team === 'B' && scoreTeamB > 0) {
      setScoreTeamB(scoreTeamB - 1);
    }
  };

  // Reset function
  const handleReset = () => {
    setScoreTeamA(0);
    setScoreTeamB(0);
    setGameOver(false); // Reset the game over state
    setWinner(null); // Reset the winner state
  };

  // Function to handle backspace/reset
  const handleBackspace = () => {
    handleReset();
    Alert.alert('Reset Pertandingan', 'Skor telah direset ke 0.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan Skor Pertandingan Futsal</Text>

      {/* Display winner message if the game is over */}
      {gameOver && (
        <Text style={styles.winnerText}>Selamat, {winner}!</Text>
      )}

      {/* Container for Team A and Team B */}
      <View style={styles.scoreContainer}>
        {/* Container for Team A */}
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>JUVENTUS</Text>
          <Text style={styles.score}>{scoreTeamA}</Text>
          <View style={styles.buttonRow}>
            <Button title="+" onPress={() => handleAddScore('A')} color="green" />
            <Button title="-" onPress={() => handleSubtractScore('A')} color="green" />
          </View>
        </View>

        {/* Container for Team B */}
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>REAL BETIS</Text>
          <Text style={styles.score}>{scoreTeamB}</Text>
          <View style={styles.buttonRow}>
            <Button title="+" onPress={() => handleAddScore('B')} color="green" />
            <Button title="-" onPress={() => handleSubtractScore('B')} color="green" />
          </View>
        </View>
      </View>

      {/* Container for Reset Button */}
      <View style={styles.resetContainer}>
        <Button title="Reset Pertandingan" onPress={handleBackspace} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  winnerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20,
  },
  scoreContainer: {
    flexDirection: 'row', // Display Team A and Team B side by side
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  teamContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d3d3d3', // Gray background
    padding: 40, // Larger padding for bigger container
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // for Android shadow
    marginHorizontal: 10, // Space between the two team containers
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 36,
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  resetContainer: {
    marginTop: 20,
    backgroundColor: '#d3d3d3', // Gray background
    padding: 40, // Larger padding for bigger container
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // for Android shadow
  },
});

export default FutsalScoreApp;
