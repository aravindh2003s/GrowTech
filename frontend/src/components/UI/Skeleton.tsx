import './Skeleton.css';

interface SkeletonProps {
  type?: 'text' | 'title' | 'avatar' | 'card' | 'thumbnail';
  className?: string;
  width?: string;
  height?: string;
}

export default function Skeleton({ type = 'text', className = '', width, height }: SkeletonProps) {
  const style = {
    width,
    height
  };

  return <div className={`skeleton ${type} ${className}`} style={style}></div>;
}
