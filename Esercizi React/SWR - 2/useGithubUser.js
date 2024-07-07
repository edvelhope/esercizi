import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useGithubUser(username) {
  if (!username) {
    return {
      users: null,
      error: null,
      isLoading: false,
    };
  }
  const { data, error } = useSWR(`https://api.github.com/users`, fetcher);

  return {
    users: data,
    error,
    isLoading: !data && !error,
  };
}
