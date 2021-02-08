/* eslint-disable react/prop-types */
/* eslint-disable jest/no-conditional-expect */
import { mount } from 'enzyme';
import React, { useEffect } from 'react';

import useVote from '~/hooks/useVote';

const dataMock = { likes: 0, dislikes: 0 };
const resultMock = { likesPercentage: 0, dislikesPercentage: 0 };

describe('Test useVote hook', () => {
  it('Should return votes percentage', () => {
    const Component = ({ onChangeUseVotes }) => {
      const votes = useVote(dataMock);

      useEffect(() => {
        onChangeUseVotes();
      }, [votes]);

      return <></>;
    };

    mount(
      <Component
        onChangeUseVotes={(dataMocked) =>
          dataMocked
            ? expect(JSON.stringify(dataMocked)).toEqual(
                JSON.stringify({ resultMock })
              )
            : ''
        }
      />
    );
  });
});
