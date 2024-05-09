import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';


type Meeting = {
  id: number;
  name: string;
  room: string;
}

const meetings: Meeting[] = [
  {
    id: 1,
    name: 'Meeting 1',
    room: 'test-0001-000'
  },
  {
    id: 2,
    name: 'Meeting 2',
    room: 'test-0001-000'
  },
  {
    id: 3,
    name: 'Meeting 3',
    room: 'test-0001-000'
  }
];



export const Home = () => {
  const { navigate } = useNavigation();

  const handleJoin = ({ room, name }: Meeting) => {
    navigate('Meeting', { room, name });
  }

  return (
    <View className="flex-1 justify-center items-center bg-slate-800">

      <Text className="text-white text-3xl mb-4">Join a meeting</Text>
      <Text className="text-white text-xl mb-4">Select a meeting room</Text>
      {meetings.map((meeting) => (
        <View className="mb-4" key={meeting.id}>
          <Button
            color="white"
            key={meeting.id}
            onPress={() => handleJoin(meeting)}
            title={meeting.name} />
        </View>
      ))}
    </View>
  );
};


