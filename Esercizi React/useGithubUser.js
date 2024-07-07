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
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users`,
    fetcher
  );

  function handleRefreshUser() {
    mutate();
  }
  return {
    users: data,
    error,
    isLoading: !data && !error,
    onRefresh: handleRefreshUser(),
  };
}
