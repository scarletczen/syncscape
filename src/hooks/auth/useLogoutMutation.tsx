function useLogoutMutation() {
  return async () => {
    localStorage.clear();
    window.location.href = "/";
  };
}

export default useLogoutMutation;
