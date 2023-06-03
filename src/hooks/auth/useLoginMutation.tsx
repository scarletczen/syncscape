const useLoginMutation = () => {
  return async () => {
    localStorage.setItem("access_token", "dummy_token");
    dispatchEvent(new Event("storage"));
  };
};

export default useLoginMutation;
