import unittest
import json
from api import *


class TestPathFinding(unittest.TestCase):
    def test_outputs(self):
        # Testing return type
        self.assertEqual(type(search(0, 4)), tuple)
        distances, prev = search(0, 4)
        # Testing correctness of path
        self.assertEqual(generate_path(0, 4, prev), [0, 1, 3, 4])


class TestCloud(unittest.TestCase):
    def test_STT(self):
        # Setting up connection to Speech to Text Server
        API_KEY = "YOUR_API_KEY"
        STT_URL = "YOUR_SERVICE_URL"

        authenticator = IAMAuthenticator(API_KEY)
        speech_to_text = SpeechToTextV1(
            authenticator=authenticator
        )
        speech_to_text.set_service_url(STT_URL)
        # audio-file.flac is the example file given in IBM speech to text docs
        # URL: https://watson-developer-cloud.github.io/doc-tutorial-downloads/speech-to-text/audio-file.flac
        with open("./audio-file.flac", "rb") as audio_file:
            speech_recognition_results = speech_to_text.recognize(
                audio=audio_file,
                content_type="audio/flac",
            ).get_result()
            self.assertEqual(speech_recognition_results["results"][0]["alternatives"][0]["transcript"],
                             "several tornadoes touched down as a line of severe thunderstorms swept through Colorado on Sunday ")
