import {Image, View, StyleSheet} from 'react-native';
import theme from '../theme';
import Text from '../components/Text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    padding: 15,
  },
  image: {
    borderRadius: 5,
    width: 50,
    height: 50,
  },
  informationContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  informationDescription: {
    flex: 1,
    flexWrap: 'wrap',
  },
  informationLanguage: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 6,
  },
  informationText: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 1,
    gap: 5,
    paddingLeft: 15,
  },
  statistics: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});

const formatNumber = (number) => {
  if (number >= 1000) {
    return `${(number / 1000).toFixed(1)}k`;
  }
  return number;
};

const Item = ({ data, text }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text fontWeight="bold">{formatNumber(data)}</Text>
      <Text color="textSecondary">{text}</Text>
    </View>
  );
};

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <View style={styles.informationContainer}>
        <Image
          style={styles.image}
          source={{
            uri: repository.ownerAvatarUrl,
          }}
        />
        <View style={styles.informationText}>
          <Text fontSize="subheading" fontWeight="bold">
            {repository.fullName}
          </Text>
          <Text color="textSecondary">{repository.description}</Text>
          <View style={styles.informationLanguage}>
            <Text color="light">{repository.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.statistics}>
        <Item
          data={repository.stargazersCount}
          text="Stars"
        />
        <Item data={repository.forksCount} text="Forks" />
        <Item data={repository.reviewCount} text="Reviews" />
        <Item
          data={repository.ratingAverage}
          text="Rating"
        />
      </View>
    </View>
  );
};

  export default RepositoryItem;