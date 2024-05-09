import { useNavigation } from '@react-navigation/native';
import { LogBox, Text, TouchableOpacity, View } from 'react-native';
import { Agenda, AgendaEntry } from 'react-native-calendars';

LogBox.ignoreAllLogs();


type Meeting = {
  id: number;
  name: string;
  room: string;
  date: string;
  onPress?: () => void;
}

const meetings: Meeting[] = [
  {
    id: 1,
    name: 'Meeting 1',
    room: 'test-0001-000',
    date: '2024-05-09'
  },
  {
    id: 2,
    name: 'Meeting 2',
    room: 'test-0001-000',
    date: '2024-05-10'
  },
  {
    id: 3,
    name: 'Meeting 3',
    room: 'test-0001-000',
    date: '2024-05-11'
  }
];


export const Home = () => {
  const { navigate } = useNavigation();

  const handleJoin = ({ room, name }: Meeting) => {
    navigate('Meeting', { room, name });
  }

  const items = meetings.reduce((acc, meeting) => {
    return {
      ...acc,
      [meeting.date]: [
        ...(acc[meeting.date] || []),
        {
          name: meeting.name,
          height: Math.max(50, Math.floor(Math.random() * 150)),
          day: meeting.date,
          onPress: () => handleJoin(meeting)
        }
      ]
    }
  }, {} as { [date: string]: AgendaEntry[] });


  return (

    <View className='flex-1 pt-14 bg-white'>
      <Agenda
        items={items}
        renderItem={(item) => {
          return (
            <TouchableOpacity className='flex-row p-4 mt-4 mr-4 bg-white gap-4 rounded-md' onPress={(item as unknown as Meeting)?.onPress}>
              <View className='flex bg-rose-400 p-4 rounded-full'>
                <Text className='text-white'>LL</Text>
              </View>
              <View>
                <Text className='font-semibold text-lg'>{item.name}</Text>
                <Text className='font-md color-zinc-500'>{item.day}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  );
}


