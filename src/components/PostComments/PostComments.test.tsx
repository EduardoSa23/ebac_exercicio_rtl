import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';

describe('Teste para o componente Post', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<Post />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários corretamente', () => {
        render(<Post />);

        const commentInput = screen.getByTestId('comment-input');
        const commentButton = screen.getByTestId('comment-button');

        fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(commentButton);

        fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
        fireEvent.click(commentButton);

        const commentList = screen.getAllByTestId('comment-item');
        expect(commentList.length).toBe(2);
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});
