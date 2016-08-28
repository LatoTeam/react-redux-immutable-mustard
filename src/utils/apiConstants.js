let suffix;

if (process.env.NODE_ENV === 'production') {
  suffix = '102.168.0.1:8001';
} else {
  suffix = 'localhost:3000';
}

export const url = `http://${suffix}/api/v1`;
