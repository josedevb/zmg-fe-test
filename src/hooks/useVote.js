import { useMemo } from 'react';

const useVote = ({ likes = 0, dislikes = 0 } = {}) => {
  const totalVotes = useMemo(() => likes + dislikes, [likes, dislikes]);

  const likesPercentage = useMemo(
    () => Math.floor((likes * 100) / totalVotes),
    [likes, totalVotes]
  );

  const dislikesPercentage = useMemo(
    () => Math.floor((dislikes * 100) / totalVotes),
    [dislikes, totalVotes]
  );

  return { likesPercentage, dislikesPercentage };
};

export default useVote;
