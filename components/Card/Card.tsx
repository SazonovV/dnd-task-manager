import { FC } from 'react';
import { Text } from '@alfalab/core-components/text';
import { Status } from '@alfalab/core-components/status';
import { DraggableProvided } from 'react-beautiful-dnd';

interface Props extends DraggableProvided {
  text: string;
  id: string;
  author: string;
  critical?: boolean;
  ref: any;
}

export const Card: FC<Props> = ({ text, id, author, provided }) => {
  return (
    <div
      className={'bg-white rounded-lg shadow-xl m-3 p-2 flex-wrap'}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Text color={'black'}>{ text }</Text>
      <div className={'flex justify-end align-end'}>
        <Status className={'mt-auto'} view='contrast' color={'green'}>
          {author}
        </Status>
      </div>
    </div>
  )
}