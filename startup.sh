echo "Installing deps..."
pip install -r requirements.txt

cd src/peng/
python -m gunicorn peng.wsgi:application
