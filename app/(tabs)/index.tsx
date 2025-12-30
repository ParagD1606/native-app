import { Text, View, Image, ScrollView, ActivityIndicator, FlatList } from "react-native";
import "../../global.css"
import { Link } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";

export default function Index() {

  const router = useRouter();

  const {data: movies, loading: moviesLoading, error: moviesError} = useFetch(()=> fetchMovies({
    query: '',
  }))

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full" />

      <ScrollView className="flex 1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}> 
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        {moviesLoading ? (
          <ActivityIndicator size="large" color="#AB8BFF" className="mt-10" />
        ) : moviesError ? (
          <Text className="text-red-500 text-center mt-10">
            {moviesError.message}
          </Text>
        ) : (
          <View className="flex 1 mt-5">
            <SearchBar 
              onPress={()=> router.push("/search")}
              placeholder="Search for movies or TV series"
            />

            <>
              <Text className="text-white text-xl font-bold mt-10 mb-5">
                Latest Movies
              </Text>

              <FlatList 
                data={movies}
                renderItem={({item})=> (
                  <Text className="text-white text-base mb-3">
                    {item.title}
                  </Text>
                )}
                keyExtractor={(item)=> item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{ justifyContent: 'flex-start', marginBottom: 10, gap: 20, paddingRight: 5 }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
          </View>
        )
        }

        
      </ScrollView>

    </View>
  );
}
