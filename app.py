from flask import Flask, render_template, jsonify
import speedtest

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')  # HTML sayfasını döndür

@app.route('/run-speedtest')
def run_speedtest():
    st = speedtest.Speedtest()
    st.get_best_server()
    download_speed = st.download() / 1_000_000  # Mbps
    upload_speed = st.upload() / 1_000_000  # Mbps
    ping = st.results.ping

    return jsonify({
        "download_speed": f"{download_speed:.2f} ",
        "upload_speed": f"{upload_speed:.2f} ",
        "ping": f"{ping:.2f} "
    })

if __name__ == '__main__':
    app.run(debug=True)
