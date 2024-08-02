import { Text, View, StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  element: {
    fontSize: 24,
  },
});

const Item = ({fullName, description, language,stargazersCount, forksCount, reviewCount,ratingAverage}) => (
    <View style={styles.item}>
      <Text style={styles.element}>{fullName}</Text>
      <Text style={styles.element}>{description}</Text>
      <Text style={styles.element}>{language}</Text>
      <Text style={styles.element}>{stargazersCount}</Text>
      <Text style={styles.element}>{forksCount}</Text>
      <Text style={styles.element}>{reviewCount}</Text>
      <Text style={styles.element}>{ratingAverage}</Text>
    </View>
  );

  export default Item;